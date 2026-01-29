pipeline {
    agent any

    environment {
        APP_NAME = 'hafis-web'
        APP_PORT = '8082'
    }

    stages {
        stage('Build Docker Image') {
            steps {
            sleep (5)
                sh 'docker build --no-cache -t ${APP_NAME}:latest .'
            }
        }

        stage('Deploy Container') {
            steps {
               sleep(5)
                sh '''
                  docker rm -f ${APP_NAME} || true
                  docker run -d \
                    --name ${APP_NAME} \
                    -p ${APP_PORT}:80 \
                    ${APP_NAME}:latest
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deploy sukses! Buka http://<IP-SERVER>:${APP_PORT}"
        }
        failure {
            echo "❌ Deploy gagal"
        }
    }
}
