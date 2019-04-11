pipeline {
  agent any
  stages {
    stage('First') {
      steps {
        powershell(script: 'npm test', returnStatus: true, returnStdout: true)
      }
    }
  }
}