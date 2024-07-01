pipeline {
    agent {
        node {
            label 'docker-cloud-agent'
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
                (docker stop strength-application || true) && (docker container wait strength-application || true) && docker run -p 3333:80 -d --name "strength-application" --restart always --rm strength-application:${BUILD_ID}
                '''
            }
        }
    }
}
