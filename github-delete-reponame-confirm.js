const confirmStr = document.querySelector('label[for="verification_field"]').textContent;
const repoName = confirmStr.split('"')[1];
document.querySelector('#verification_field').value = repoName;