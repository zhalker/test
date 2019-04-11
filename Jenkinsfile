pipeline {
  agent any
  stages {
    stage('First') {
      steps {
        powershell(script: 'echo "Hola mundo"', returnStatus: true, returnStdout: true)
      }
    }
  }
}