from flask import Flask
from flask_restful import Resource, Api
from flask_jwt import JWT

from ex_flask_restful_sql_sec import authenticate, identity
from exercises_sqlalch_resources.ex_flask_restful_sqlalch_user import UserRegister, User
from exercises_sqlalch_resources.ex_flask_restful_sqlalch_item import Item, ItemList
from ex_flask_restful_sqlalch_db import db
from exercises_sqlalch_resources.ex_flask_restful_sqlalch_store import Store, StoreList

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True
app.secret_key = 'test key'
api = Api(app)

@app.before_first_request
def create_tables():
    db.create_all()

jwt = JWT(app, authenticate, identity)

api.add_resource(Store, '/store/<string:name>')
api.add_resource(Item, '/item/<string:name>')
api.add_resource(ItemList, '/items')
api.add_resource(UserRegister, '/register')
api.add_resource(StoreList, '/stores')
api.add_resource(User, '/user/<int:user_id>')

if __name__ == '__main__':
    db.init_app(app)
    app.run(port=5000, debug=True)
