pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
        githubPush()
    }

    environment {
        EC2_HOST = '10.0.0.133'
        EC2_USER = 'ubuntu'
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
                    def branchName = env.GIT_BRANCH ?: sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim()
                    echo "Current branch is ${branchName}"

                    if (!branchName.contains("main")) {
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
                        chmod 600 \${SSH_KEY_FILE}

                        ssh -i \${SSH_KEY_FILE} -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'mkdir -p ${DEPLOY_DIR}'

                        scp -i \${SSH_KEY_FILE} -o StrictHostKeyChecking=no -r dist/* ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIR}
                    """
                }
            }
        }
    }

    post {
        success {
            echo '✅ Successfully built and deployed to EC2!'
        }
        failure {
            echo '❌ Build or deployment failed!'
        }
        always {
            cleanWs()
        }
    }
}
