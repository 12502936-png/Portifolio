function darkmode() {
    document.body.classList.toggle("darkmodeefeito")
}

function mascara_cep() {
    var cep_formatado = document.getElementById("cep").value
    if (cep_formatado[2] != ".") {
        if (cep_formatado[2] != undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 2) + "." + cep_formatado[2];
        }
    }

    if (cep_formatado[6] != "-") {
        if (cep_formatado[6] != undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 6) + "-" + cep_formatado[6]
        }
    }

}

function mascara_tel() {

    var tel = document.getElementById("telefone").value
    console.log(tel)
    console.log(tel)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)
    console.log(tel)

    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "+") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "+" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != " ") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + " " + tel_formatado[3]
        }
    }

    if (tel_formatado[4] != "(") {
        if (tel_formatado[4] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 4) + "(" + tel_formatado[4]
        }
    }



    if (tel_formatado[7] != ")") {
        if (tel_formatado[7] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 7) + ")" + tel_formatado[7]
        }
    }


    if (tel_formatado[8] != " ") {
        if (tel_formatado[8] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 8) + " " + tel_formatado[8]
        }
    }

    if (tel_formatado[10] != " ") {
        if (tel_formatado[10] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 10) + " " + tel_formatado[10]
        }
    }


    if (tel_formatado[15] != "-") {
        if (tel_formatado[15] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 15) + "-" + tel_formatado[15]
        }
    }
}




function mascara_cnpj() {

    var cnp = document.getElementById("cnpj").value

    document.getElementById("cnpj").value = cnp
    cnp = document.getElementById("cnpj").value.slice(0, 10)


    var cnp_formatado = document.getElementById("cnpj").value
    if (cnp_formatado[2] != ".") {
        if (cnp_formatado[2] != undefined) {
            document.getElementById("cnpj").value = cnp_formatado.slice(0, 2) + "." + cnp_formatado[2];
        }
    }

    if (cnp_formatado[6] != ".") {
        if (cnp_formatado[6] != undefined) {
            document.getElementById("cnpj").value = cnp_formatado.slice(0, 6) + "." + cnp_formatado[6];
        }
    }

    if (cnp_formatado[10] != "/") {
        if (cnp_formatado[10] != undefined) {
            document.getElementById("cnpj").value = cnp_formatado.slice(0, 10) + "/" + cnp_formatado[10];
        }
    }



    if (cnp_formatado[15] != "-") {
        if (cnp_formatado[15] != undefined) {
            document.getElementById("cnpj").value = cnp_formatado.slice(0, 15) + "-" + cnp_formatado[15];
        }
    }

}


function mascara_cpf() {

    var cpf = document.getElementById("cpf").value

    document.getElementById("cpf").value = cpf

    cpf = document.getElementById("cpf").value.slice(0, 10)

    var cpf_formatado = document.getElementById("cpf").value

    if (cpf_formatado[3] != ".") {

        if (cpf_formatado[3] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 3) + "." + cpf_formatado[3];
        }
    }

    if (cpf_formatado[7] != ".") {
        if (cpf_formatado[7] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 7) + "." + cpf_formatado[7];
        }
    }

    if (cpf_formatado[11] != "-") {
        if (cpf_formatado[11] != undefined) {
            document.getElementById("cpf").value = cpf_formatado.slice(0, 11) + "-" + cpf_formatado[11];
        }
    }


}


function alerta(event) {
    event.preventDefault();
    alert("ENVIADO COM SUCESSO!");
    event.target.reset(); 
}



const fotosalternadas = [
    "luccamonteiro.jpg",
    "luccathebest.jpg",
    "luccamonteiro.jpg"
]

let indexfoto = 0;

const fotoatual = document.getElementById("fotoportifolio");
function alternarFoto() {
  fotoatual.classList.add("fotoescondida");

  setTimeout(() => {
      indexfoto = (indexfoto + 1) % fotosalternadas.length;
      fotoatual.src = fotosalternadas[indexfoto];
  }, 500);
}

fotoatual.addEventListener("load", () => {
  fotoatual.classList.remove("fotoescondida");
});

setInterval(alternarFoto, 3000);


"use strict";
 

// Dados 
const SKILLS_FOLDERS = [
    { key: "programmingLanguages", label: "Programming Languages", icon: "back.png", files: [
        { name: "C#", icon: "programming-ccharp.png", ext: ".c#" },
        { name: "Python", icon: "programming-python.png", ext: ".py" },
        { name: "SQL", icon: "programming-mysql.png", ext: ".sql" },
        { name: "Packet Tracer", icon: "programming-packet.png", ext: ".pkt" },
        
        /* estudar note pra usar: { name: "Node", icon: "🟢", ext: ".js" },*/
        
      ]},
  { key: "frontend", label: "Front-End", icon: "front.png", files: [
    { name: "HTML", icon: "front-html.png", ext: ".html" },
    { name: "CSS", icon: "front-css.png", ext: ".css" },
    { name: "JavaScript", icon: "front-javascript.png", ext: ".js" },
    { name: "React", icon: "front-react.png", ext: ".jsx" },
  ]},
  { key: "cloud", label: "Cloud & OS", icon: "cloud-removebg-preview.png", files: [
    { name: "Windows", icon: "web-windows.png", ext: ".docx" },
    { name: "Linux", icon: "web-linux.png", ext: ".sh" },
    
    /* estudar aws e docker pra usar: { name: "AWS", icon: "☁️", ext: ".tf" },
    { name: "Docker", icon: "🐳", ext: ".yml" },*/
  ]},
  { key: "design", label: "Design", icon: "lapis-removebg-preview.png", files: [
    { name: "Figma", icon: "figma.png", ext: ".fig" },
    

 /* estudar tudo isso pra usar: { name: "Photoshop", icon: "🖼️", ext: ".psd" },
    { name: "Ilustração", icon: "✏️", ext: ".ai" },
    { name: "Motion", icon: "🎬", ext: ".mp4" },
    { name: "Branding", icon: "🏷️", ext: ".brand" },*/


  ]},
];
 

function buildSkillFile(file, index, total) {
  const mid = (total - 1) / 2; // posição central da lista
  const off = index - mid; // distância do centro (negativo/positivo)
  const arch = mid === 0 ? 1 : 1 - Math.abs(off) / mid; // 1 no centro, 0 nas pontas
  const delay = (Math.abs(off) * 0.045).toFixed(3); // atraso crescente pras pontas
 
  const el = document.createElement("span");
  el.className = "ff-file";
  el.style.setProperty("--off", String(off));
  el.style.setProperty("--arch", arch.toFixed(3));
  el.style.setProperty("--fd", delay + "s");
 
  el.innerHTML = `
    <span class="ff-icon"><img class= "folder-img" src="${file.icon}"></span>
    <span class="ff-name">${file.name}</span>
    <span class="ff-ext">${file.ext}</span>
  `;
  return el;
}
 

function buildSkillFolder(folder) {
  const wrap = document.createElement("div");
  wrap.className = "skill-folder";
  wrap.dataset.key = folder.key;
 
  const filesWrap = document.createElement("div");
  filesWrap.className = "folder-files";
  folder.files.forEach((f, i) => filesWrap.appendChild(buildSkillFile(f, i, folder.files.length)));
 
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "folder-btn";
  btn.innerHTML = `
    <span class="folder-shape">
      <span class="folder-tab"></span>
      <span class="folder-back"></span>
      <span class="folder-front">
        <span class="folder-ico"><img class="folder-centerimg" src="${folder.icon}"></span>
        <span>
          <div class="folder-label">${folder.label}</div>
          <div class="folder-detail">${folder.files.length} skills</div>
        </span>
      </span>
    </span>
  `;
  btn.addEventListener("click", () => toggleFolder(wrap));
 
  wrap.append(filesWrap, btn);
  return wrap;
}
 
function closeOthers(except) {
  document.querySelectorAll(".skill-folder.open").forEach((el) => {
    if (el !== except) el.classList.remove("open");
  });
}
 
function toggleFolder(el) {
  const willOpen = !el.classList.contains("open");
  closeOthers(el);
  el.classList.toggle("open", willOpen);
}
 
const container = document.getElementById("folders");
SKILLS_FOLDERS.forEach((f) => container.appendChild(buildSkillFolder(f)));


document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  });
});



// ===== CARROSSEL DE PROJETOS =====
const trilho = document.getElementById("trilho-projetos");
const slidesProj = trilho.querySelectorAll(".slide");
const pontosBox = document.getElementById("pontos-projetos");

// 1) cria um ponto para cada slide
slidesProj.forEach((_, i) => {
  const ponto = document.createElement("button");
  ponto.type = "button";
  ponto.className = "ponto";
  ponto.setAttribute("aria-label", "Ir para o projeto " + (i + 1));
  ponto.addEventListener("click", () => irParaSlide(i));
  pontosBox.appendChild(ponto);
});

// 2) descobre qual slide está visível (scrollLeft dividido pela largura de um slide)
function slideAtual() {
  return Math.round(trilho.scrollLeft / trilho.clientWidth);
}

// 3) rola até um slide específico
function irParaSlide(i) {
  trilho.scrollTo({ left: i * trilho.clientWidth, behavior: "smooth" });
}

// 4) marca o ponto ativo; roda sempre que o trilho rola (botão, ponto ou dedo)
function atualizarPontos() {
  const atual = slideAtual();
  pontosBox.querySelectorAll(".ponto").forEach((p, i) => {
    p.classList.toggle("ativo", i === atual);
  });
}
trilho.addEventListener("scroll", atualizarPontos);
atualizarPontos();

// 5) botões, com volta ao início/fim (loop)
document.getElementById("proj-next").addEventListener("click", () => {
  const prox = slideAtual() + 1;
  irParaSlide(prox >= slidesProj.length ? 0 : prox);
});

document.getElementById("proj-prev").addEventListener("click", () => {
  const ant = slideAtual() - 1;
  irParaSlide(ant < 0 ? slidesProj.length - 1 : ant);
});