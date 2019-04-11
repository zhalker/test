pipeline {
  agent any
  stages {
    stage('First') {
      steps {
        powershell(script: 'echo "Hola"', returnStatus: true, returnStdout: true, encoding: 'utf-8')
      }
    }
  }
}