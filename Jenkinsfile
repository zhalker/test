pipeline {
  agent any
  stages {
    stage('First') {
      steps {
        powershell(script: 'npm install npm test', returnStatus: true, returnStdout: true)
      }
    }
  }
}