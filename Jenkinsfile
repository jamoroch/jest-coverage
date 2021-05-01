pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Get some code from a GitHub repository
                git branch: 'main', url: 'https://github.com/jamoroch/jest-coverage.git'
            }
        }
        stage('Build') {
            steps {
                   nodejs(nodeJSInstallationName: 'nodejs16') {
                    sh 'npm install && npm run coverage'
                }
            }
            post {
                always {
                    publishHTML (target : [allowMissing: false,
                        alwaysLinkToLastBuild: true,
                        keepAll: true,
                        reportDir: 'coverage',
                        reportFiles: 'index.html',
                        reportName: 'Code coverage',
                        reportTitles: 'Code coverage'])
                }
            }
        }
    }
}
