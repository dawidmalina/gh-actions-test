resource "local_file" "backup_file" {
  content  = "very nice"
  filename = "${path.module}/config.yml"
}
