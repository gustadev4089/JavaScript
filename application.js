

class Tempo{
    constructor(){
        let week = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];

        let month = [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"
        ];

        let date = new Date();

        this.dia_semana = week[Number(date.getDay() - 1)]
        this.mes_ano = month[date.getMonth()]
        
        this.dia = date.getDate();
        this.mes = Number(date.getMonth()) + 1;
        this.ano = date.getFullYear();
        this.data_completa = String(`${this.dia}/${this.mes}/${this.ano}`);
    }


    show_week_day = ()=>{
        console.log(`hoje é ${this.dia_semana}`);
    }

    show_month_year = ()=>{
        console.log(`Mês ${this.mes_ano}`);
    }

}


addEventListener("load", ()=>{
    
    let hoje = new Tempo();

    let element_p = document.querySelector("p");
    let element_h3 = document.querySelector("h3");

    element_p.innerHTML = `${hoje.data_completa}`;

    element_h3.innerHTML = `Hoje é ${hoje.dia_semana}, ${hoje.dia} de ${hoje.mes_ano}.` 
})





let hoje = new Tempo();

hoje.show_week_day();
hoje.show_month_year();