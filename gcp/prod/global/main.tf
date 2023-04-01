resource "local_file" "backup_file" {
  vcontent  = "very nice"
  filename = "${path.module}/config.yml"
}

