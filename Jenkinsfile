pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t portfolio-web .'
      }
    }
    stage('Deploy') {
      steps {
        sh '''
        docker rm -f portfolio || true
        docker run -d --name portfolio -p 8082:80 portfolio-web
        '''
      }
    }
  }
}
