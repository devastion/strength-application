pipeline {
    agent {
        docker {
            label 'docker-agent-alpine'
            }
      }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                docker build -f dockerfiles/prod.dockerfile . -t strength-application:${BUILD_ID}
                '''
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy....'
                sh '''
                docker stop strength-application
                docker run -p 3333:80 --name "strength-application" --rm strength-application:${BUILD_ID}
                '''
            }
        }
    }
}