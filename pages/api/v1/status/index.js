function status(request, response) {
  response.status(200).json({ chave: "Teste da API após alteração." });
}

export default status;
