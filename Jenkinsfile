pipeline {
    agent any
    
    triggers {
        pollSCM('H/5 * * * *')
        githubPush()
    }
    
    environment {
        EC2_HOST = '54.237.236.169'
        EC2_USER = 'admin'
        DEPLOY_DIR = '/var/www/html'
        SSH_KEY = credentials('ec2-ssh-key') // Using credentials binding
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Check Branch') {
            steps {
                script {
                    def branchName = sh(script: 'git rev-parse --abbrev-ref main', returnStdout: true).trim()
                    echo "Current branch is ${branchName}"
                    
                    if (branchName != 'main') {
                        echo "Stopping execution: not on main branch"
                        currentBuild.result = 'ABORTED'
                        error("Stopping execution: not on main branch")
                    }
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy to EC2') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'SSH_KEY_FILE')]) {
                    sh """
                        # Ensure proper permissions for SSH key
                        chmod 600 \${SSH_KEY_FILE}
                        
                        # Create deploy directory
                        ssh -i \${SSH_KEY_FILE} -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'mkdir -p ${DEPLOY_DIR}'
                        
                        # Copy build files
                        scp -i \${SSH_KEY_FILE} -r build/* ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIR}
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo 'Successfully built and deployed to EC2!'
        }
        failure {
            echo 'Build or deployment failed!'
        }
        always {
            cleanWs() // Clean workspace after build
        }
    }
}