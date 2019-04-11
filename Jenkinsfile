pipeline {
  agent any
  stages {
    stage('First') {
      steps {
        powershell(script: 'npm start', returnStatus: true, returnStdout: true, encoding: 'utf-8')
      }
    }
  }
}