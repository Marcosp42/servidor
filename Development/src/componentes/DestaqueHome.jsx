import React, { Component } from "react";
import "./DestaqueHome.css";

export default class destaque extends Component {
  state = {
    ajax: [{}, {}, {}, {}],
  };

  Request = fetch("https://server-ik1h.onrender.com/destaqueMenuHome", {
    method: "GET",
  })
    .then((Response) => Response.json())
    .then((Response) => {
      const containerDestaqueHome = document.getElementById(
        "containerDestaqueHome"
      );

      this.setState({ ajax: Response });
      const minCardFile = document.querySelectorAll("#roleta .minCardFile");
      minCardFile.forEach((e, i) => {
        e.style.backgroundImage = `url(${Response[i].urlMinCapa})`;
      });
      containerDestaqueHome.style.backgroundImage = `url(${Response[0].urlCapa})`;
    });

  toggle = (e) => {
    const containerDestaqueHome = document.getElementById(
      "containerDestaqueHome"
    );

    const title = document.querySelector("#info .text h1");
    const describ = document.querySelector("#info .text p");
    const active = document.querySelector(".ativo");

    title.innerText = `${this.state.ajax[e.target.id].title}`;
    describ.innerText = `${this.state.ajax[e.target.id].describ}`;
    active.classList.remove("ativo");
    e.target.classList.add("ativo");

    containerDestaqueHome.style.backgroundImage = `url(${
      this.state.ajax[e.target.id].urlCapa
    })`;
  };

  render() {
    return (
      <div id="containerDestaqueHome">
        <div id="info">
          <div className="text">
            <h1>{this.state.ajax[0].title}</h1>
            <p>{this.state.ajax[0].describ}</p>
          </div>

          <div id="roleta">
            <div
              id="0"
              capa={this.state.ajax[0].urlCapa}
              className="minCardFile ativo"
              onClick={(e) => this.toggle(e)}
            ></div>

            <div
              id="1"
              title={this.state.ajax[1].title}
              capa={this.state.ajax[1].urlCapa}
              className="minCardFile "
              onClick={(e) => this.toggle(e)}
            ></div>

            <div
              id="2"
              title={this.state.ajax[2].title}
              capa={this.state.ajax[2].urlCapa}
              className="minCardFile "
              onClick={(e) => this.toggle(e)}
            ></div>

            <div
              id="3"
              title={this.state.ajax[3].title}
              capa={this.state.ajax[3].urlCapa}
              className="minCardFile "
              onClick={(e) => this.toggle(e)}
            ></div>
          </div>

          <div className="btnInfo">
            <button>Assista Agora</button>
          </div>
        </div>
      </div>
    );
  }
}
