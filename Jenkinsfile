pipeline {
    agent any
    
    // Add triggers for main branch
    triggers {
        pollSCM('H/5 * * * *')  // Polls every 5 minutes
        githubPush()            // Triggers on GitHub webhook
    }
    
    environment {
        // EC2 deployment details
        EC2_HOST = '13.201.73.252'
        EC2_USER = 'admin'
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
                    if (env.BRANCH_NAME != 'main') {
                        currentBuild.result = 'START'
                        error('Start execution: on main branch')
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
                // Using SSH credentials to securely connect to EC2
                sshagent([SSH_CREDENTIALS]) {
                    // Create deploy directory if it doesn't exist
                    sh "ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'mkdir -p ${DEPLOY_DIR}'"
                    
                    // Copy build files to EC2
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