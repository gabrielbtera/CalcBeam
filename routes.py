from flask import Flask, request, render_template

from main import insertUsuario
app = Flask('Youtube')




@app.route("/cadastra/usuario", methods =["POST"])
def cadastraUser():
    print("carai")
    body = request.get_json()
    
    if "nome" not in body:
        return geraResponse(400, "não tem nome")
    usuario = insertUsuario(body["nome"], body["email"])

    return geraResponse(200, "usuário criado", "user", usuario)

def geraResponse(status, mensagem, nome_do_conteudo=False, conteudo=False):
    response = {}
    response['status'] = status
    response["mensagem"] = mensagem
    if(nome_do_conteudo and conteudo):
        response[nome_do_conteudo] = conteudo
    return response
app.run()
