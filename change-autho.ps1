$OLD_EMAIL = "usikumary@gmail.com"
$CORRECT_NAME = "DeveloperWilliams"
$CORRECT_EMAIL = "archywilliams2@gmail.com"

git filter-branch --env-filter {
  if ($env:GIT_COMMITTER_EMAIL -eq $OLD_EMAIL) {
    $env:GIT_COMMITTER_NAME = $CORRECT_NAME
    $env:GIT_COMMITTER_EMAIL = $CORRECT_EMAIL
  }
  if ($env:GIT_AUTHOR_EMAIL -eq $OLD_EMAIL) {
    $env:GIT_AUTHOR_NAME = $CORRECT_NAME
    $env:GIT_AUTHOR_EMAIL = $CORRECT_EMAIL
  }
} --tag-name-filter cat -- --branches --tags
