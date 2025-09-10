export function sendMail() {
  const phone = ref('')
  const name = ref('')
  const isSuccess = ref(false)

const resetForm = () => {
  phone.value = ''
  name.value = ''
}

  const handleSubmit = async (phone: string, name: string) => {
try {
  resetForm()
  const mail = useMail()
  await mail.send({
    to: 'ceo@akrlog.ru',
        subject: 'Новая заявка с сайта "akrlog.ru"',
        html: `
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
        `,
  })
  isSuccess.value = true

  setTimeout(() => {
    isSuccess.value = false
  }, 3000)
} catch (error) {
  console.error(error)
}
  }

  return {
    phone,
    name,
    isSuccess,
    handleSubmit,
    resetForm
  }
}
