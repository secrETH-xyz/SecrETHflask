// const hitDecryptEndpoint = async (encrypted_message) => {
//   const body = { encrypted_message }
//   const res = await fetch('http://127.0.0.1:3000/decrypt', {
//     method: 'POST',
//     body: JSON.stringify(body) // body data type must match "Content-Type" header
//   })
//   const json = await res.json()
//   return json
// }

// // const encrypted_message = `84116017433852687828895522314957936859461010955255529249098901597640284918339 30149203042391427187371067948643221044877031948214106631492743117600188316053 77063901856809388108223321875715773075060211935425309996466425831622105809698 43315634458797706148770100740942572846951328506295358045188727020747998120109 b'\xc6JH\x13.\xf4\x99ms[t\xd8tKM\x9b\xbf2\xf6VSm6e\xaa5\xaf\x0cVe"\x83Y\ra\x11+\x7fk\xb0%\x9d%\xa9<^#d\x8byu\xfe\xb8\xe1\x03\xf4\xb9u\xab\xf6\xe0\x10X\xf3G\x06\xd8\xcdO&s]\x12\xa1\xa0\x1d'`
// const encrypted_message = "84116017433852687828895522314957936859461010955255529249098901597640284918339 30149203042391427187371067948643221044877031948214106631492743117600188316053 77063901856809388108223321875715773075060211935425309996466425831622105809698 43315634458797706148770100740942572846951328506295358045188727020747998120109 b'\\xc6JH\\x13.\\xf4\\x99ms[t\\xd8tKM\\x9b\\xbf2\\xf6VSm6e\\xaa5\\xaf\\x0cVe\"\\x83Y\\ra\\x11+\\x7fk\\xb0%\\x9d%\\xa9<^#d\\x8byu\\xfe\\xb8\\xe1\\x03\\xf4\\xb9u\\xab\\xf6\\xe0\\x10X\\xf3G\\x06\\xd8\\xcdO&s]\\x12\\xa1\\xa0\\x1d'"
// const res = await hitDecryptEndpoint(encrypted_message)
// console.log(res)


const hitPartialDecryptEndpoint = async (signer_index) => {
  const body = { signer_index }
  const res = await fetch('http://127.0.0.1:3001/compute-partial-decryption', {
    method: 'POST',
    body: JSON.stringify(body) // body data type must match "Content-Type" header
  })
  const text = await res.text()
  return text
}

console.log(await hitPartialDecryptEndpoint(0))

