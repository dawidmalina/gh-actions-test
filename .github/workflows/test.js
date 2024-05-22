const inputs = process.argv

const approversRaw = inputs[2]
const actor = inputs[3]

const approvers = approversRaw.split(',')
console.log(`Verify if ${actor} is one of the approvers: [${approvers}]`)

if (Array.isArray(approvers)) {
  // check if actor is in the approvers list
  if (approvers.includes(actor)) {
    console.log(`${actor} is valid approver`)
  } else {
    console.log(`${actor} is not valid approvers`)
    process.exit(1)
  }
} else {
  console.log(`approvers ${approvers} is not valid array`)
  process.exit(1)
}
