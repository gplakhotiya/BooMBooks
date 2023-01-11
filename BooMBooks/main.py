from flask import Blueprint, Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from neo4j import READ_ACCESS, WRITE_ACCESS, GraphDatabase
from neo4j.exceptions import ServiceUnavailable

driver = GraphDatabase.driver("bolt://localhost:11003",
                              auth=("neo4j", "password"))
session = driver.session()

app = Flask(__name__)
angular = Blueprint("angular", __name__, template_folder="dist/boo-mbooks")
# src
app.register_blueprint(angular)
CORS(app, support_credentials=True, origins="*")


@app.route("/")
@cross_origin(supports_credentials=True)
def Home():
    return render_template("index.html")


@app.route("/search", methods=['GET', 'POST'])
def search():
    data = request.get_data('data')

    Book = "One"
    query = ("Match (n {Title: $Book})   Return n")  # (n{Author: $data})
    result = session.run(query, Book=Book, data=data)
    values = [record.values() for record in result]
    print(values.Title)
    return (values)
    # return 'hey'


@app.route("/delete", methods=['POST'])
def Delete():
    data = request.get_data('id')
    print(data)
    query = "match (n: Author {Author: $data}) Delete n"
    query2 = "match (n: Book {Title: $data}) Delete n "
    query3 = "match (n:Publisher{Publisher:$data}) delete n"


# def Update():
#     # data=request.get_data()
#     data = request.args.get('data')
#     return 'status'


# def Add():
#     Title = request.args.get('Book')
#     Author = request.args.get('Author')
#     Publisher = request.args.get('Publisher')
#     query = "create (a:Author {Author:$Author})-[:Wrote]->(b:Book {Title:$Title}) (p:Publisher {Publisher:$Publisher})-[:published]->(b)"


if __name__ == "__main__":
    app.run(port=8000, debug=True)  # host='0.0.0.0',
