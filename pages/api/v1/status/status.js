function status(request, response) {
  response.status(200).json({ chave: "Eu estou orgulhosa de você!" });
}

export default status;
