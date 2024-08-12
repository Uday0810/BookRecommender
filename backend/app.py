from flask import Flask, jsonify, url_for, request
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

pt = pickle.load(open('pt.pkl', 'rb'))
books = pickle.load(open('books.pkl', 'rb'))

def recommend(book_name):
    try:
        index = np.where(pt.index == book_name)[0][0]
        similar_items = sorted(list(enumerate(cosine_similarity(pt)[index])), key=lambda x: x[1], reverse=True)[1:5]

        data = []
        for i in similar_items:
            item = []
            temp_df = books[books['Book-Title'] == pt.index[i[0]]]
            item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values))
            item.extend(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values))
            item.extend(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values))

            data.append(item)
        
        return data
    except IndexError:
        return []
    
@app.route('/api/recommend', methods=['GET'])
def get_recommendations():
    book_name = request.args.get('book_name')
    if not book_name:
        return jsonify({'error': 'No book name provided'}), 400

    recommendations = recommend(book_name)
    return jsonify(recommendations)


@app.route('/', methods=['GET'])
def home():
    #return send_from_directory('frontend','index.html')
    return "Home page for the popular books api"

@app.route('/api/popular_books', methods=['GET'])
def popular_books():
    try:
        df = pd.read_csv('popular_books.csv')
        data = df.to_dict(orient='records')
        return jsonify(data)
    except Exception as e:
        print(f"Error : {e}")
        return jsonify({"error" : "An error Occurred"}), 500

@app.route('/routes', methods=['GET'])
def list_routes():
    import urllib
    output = []
    for rule in app.url_map.iter_rules():
        options = {}
        for arg in rule.arguments:
            options[arg] = "[{0}]".format(arg)

        methods = ','.join(rule.methods)
        url = url_for(rule.endpoint, **options)
        line = urllib.parse.unquote("{:50s} {:20s} {}".format(rule.endpoint, methods, url))
        output.append(line)

    return "<pre>" + "\n".join(sorted(output)) + "</pre>"

@app.route('/test', methods=['GET'])
def test():
    return "The server is working!"

if __name__ == '__main__':
    app.run(debug=True)
