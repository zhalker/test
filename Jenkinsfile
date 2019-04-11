pipeline {
  agent any
  stages {
    stage('First') {
      steps {
        powershell(script: 'ls', returnStatus: true, returnStdout: true, encoding: 'utf-8')
      }
    }
  }
}