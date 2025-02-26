from flask import Flask, request, render_template
import cowsay

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/cowsay', methods=['GET'])
def say():
    message = request.args.get("message", "Moo!")
    cow_type = request.args.get("type", "cow")

    if cow_type not in cowsay.char_names:
        cow_type = "cow"  # Mặc định nếu nhập sai

    cow_message = cowsay.get_output_string(cow_type, message)
    return {"message": cow_message}

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=10000)
