pipeline {
    agent any
    
    environment {
        EC2_HOST = 'your-ec2-ip'
        EC2_USER = 'ubuntu'
        SSH_CREDENTIALS = 'ec2-ssh-key'
    }
    
    tools {
        nodejs 'NodeJS 20.x'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
                script {
                    // Create a tar of the build
                    sh 'tar -czf dist.tar.gz dist/'
                    
                    // Transfer files to EC2
                    sshagent([SSH_CREDENTIALS]) {
                        // Ensure target directory exists
                        sh """
                            ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} '
                                mkdir -p /var/www/html
                            '
                        """
                        
                        // Copy build files
                        sh """
                            scp -o StrictHostKeyChecking=no dist.tar.gz ${EC2_USER}@${EC2_HOST}:/tmp/
                            ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} '
                                cd /tmp && \
                                sudo rm -rf /var/www/html/* && \
                                sudo tar -xzf dist.tar.gz && \
                                sudo cp -r dist/* /var/www/html/ && \
                                sudo chown -R www-data:www-data /var/www/html && \
                                sudo chmod -R 755 /var/www/html && \
                                rm -rf dist.tar.gz dist
                            '
                        """
                    }
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
        success {
            echo 'Successfully deployed to EC2!'
        }
        failure {
            echo 'Deployment failed!'
        }
    }
}