pipeline {
  agent any
  stages {
    stage('First') {
      steps {
        powershell(script: 'Write-Output \'Hello, World!\'', returnStatus: true, returnStdout: true)
      }
    }
  }
}