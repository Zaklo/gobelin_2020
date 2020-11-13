import { Component } from "react";

class Denomination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      tokens: [],
      message : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
      tokens: [],
      message : ''
    });
  }

  calculTokens(amount) {
    const { tokens: t } = this.props;
    const denominations = [ ...t ]; // copie sur un tableau simpe le spread fait une copie peu profonde
    const tokens = [];

    let q;

    denominations.sort((a, b) => b - a);
    tokens.push({ amount });

    for (const d of denominations) {
      if (amount >= d) {
        q = Math.floor(amount / d);
        tokens.push({ token: d, quantity: q });
        amount = amount - q * d;
      }
    }

    return tokens;
  }

  handleSubmit(e) {
    e.preventDefault();

    let { amount } = this.state;
    amount =  Math.abs(amount);

    if( parseInt(amount) != amount ){

        this.setState({
            message : `Attention ce nombre : ${amount} n'est pas un entier positif`,
            amount : ''
        });

        return;
    }

    this.setState({ tokens: this.calculTokens(amount), amount: "" });
  }

  render() {
    const { amount, tokens, message } = this.state;
    const { tokens: denomination } = this.props;

    return (
      <div>
        <h2>Tokens : {denomination.join(", ")}</h2>
        { message && <p>{message}</p>}
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              value={amount}
              onChange={this.handleChange}
              name="amount"
            />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
        {tokens.length > 0 && (
          <>
            <h2>Amount : {tokens[0].amount} </h2>
            <ul>
              {tokens.slice(1).map(({ token, quantity }, i) => (
                <li key={i}>
                  Token : {token} quantity : {quantity}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default Denomination;