// function to generate markdown for ReadMe
function generateMarkdown(data) {
  return `
  # GitHub Username
  ## ${data.Username}
  

  # Email
  ## ${data.email}


​  # Project Title
  ## ${data.title}


  # Installation Instructions
  ## ${data.install}


  # Language
  ## ${data.language}


  # License
  ## ${data.license}


  # Collaborators
  ## ${data.collaborators}
`;
}
module.exports = generateMarkdown;
