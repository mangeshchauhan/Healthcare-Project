pipeline {
    agent any
    
    triggers {
        pollSCM('H/5 * * * *')
        githubPush()
    }
    
    environment {
        EC2_HOST = '13.201.73.252'
        EC2_USER = 'ec2-user'
        DEPLOY_DIR = '/var/www/html'
        SSH_CREDENTIALS = 'ec2-ssh-key'
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
                    def branchName = sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim()
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
                sshagent([SSH_CREDENTIALS]) {
                    sh "ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'mkdir -p ${DEPLOY_DIR}'"
                    sh "scp -r build/* ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIR}"
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
    }
}