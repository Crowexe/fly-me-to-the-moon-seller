import "./Shop.css";
import { db } from '../firebase';
import { Navbar } from '../components/Navbar';
//import { collection, setDoc, getDocs } from "firebase/firestore";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";

export default function Boletos() {
  //const [boletos, setBoletos] = useState([]);
  class Ticket {
    constructor(id, compania, destino, escala, estanciad, fecida, fecvuelta, precio, origen) {
      this.id = id;
      this.compania = compania;
      this.destino = destino;
      this.escala = escala;
      this.estanciad = estanciad;
      this.fecida = fecida;
      this.fecvuelta = fecvuelta;
      this.precio = precio;
      this.origen = origen;
    }
  }
  const ticketConverter = {
    toFirestore: (ticket) => {
      return {
        id: ticket.id,
        compania: ticket.compania,
        destino: ticket.destino,
        escala: ticket.escala,
        estanciad: ticket.estanciad,
        fecida: ticket.fecida,
        fecvuelta: ticket.fecvuelta,
        precio: ticket.precio,
        origen: ticket.origen
      };
    },
    fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Ticket(data.id, data.compania, data.destino, data.escala, data.estanciad, data.fecida, data.fecvuelta, data.precio, data.origen);
    }      
  }
  
  //async function setDocus() {
  //  
  //  const ticketsRef = collection(db, "tickets");
//
  //  await setDoc(doc(ticketsRef, "JP"), {
  //      compania: "AeroMexico", destino: "Tokyo, Japon", escala: 1,
  //      estanciad: 10, fecida: "18/10/2022", fecvuelta: "28/10/2022", origen: "Mexico, DF", precio: 26700 });
  //  await setDoc(doc(ticketsRef, "CS"), {
  //      compania: "Air Canada", destino: "Seul, Corea", escala: 1,
  //      estanciad: 8, fecida: "12/09/2022", fecvuelta: "20/09/2022", origen: "Mexico, DF", precio: 25200 });
  //}

  async function fetchDocs() { 
    //const docRef2 = doc(db, "tickets", "CS");
    //const docSnap2 = await getDoc(docRef2);
    const ref = doc(db, "tickets", "JP").withConverter(ticketConverter);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
    const ticket = docSnap.data();
    console.log(ticket.toString());
    console.log(ticket.compania);
    console.log(ticket.destino);
    console.log(ticket.escala);
    console.log(ticket.estanciad);
    console.log(ticket.fecida);
    console.log(ticket.fecvuelta);
    console.log(ticket.precio);
    console.log(ticket.origen);

    //console.log("Document data:", docSnap2.data());
    } else {
      console.log("No such document!");
    }
    
    const querySnapshot = await getDocs(collection(db, "tickets"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });

  }

  useEffect (() => {    
    //setDocus();
    fetchDocs();
  }, []);

  const addCart = (id) => {
    console.log(id);
  }

    return (
        <div className="Shop-contenedor">
          <div className="Shop">
            <Navbar />
            <div className="Shop-contenido">
              <div className="Shop-search">
                <div className="titulo-boletos">Vuelos disponibles</div>
                <input className="input-left" type="text" placeholder="Origen" />
                <input type="text" placeholder="Destino" />
                <button>Buscar</button>
              </div>
            </div>
            <section className="identificadores">
                <div>ID</div>
                <div>Aerolinea</div>
                <div>Destino</div>
                <div>Origen</div>
                <div>Estadia</div>
                <div>Fecha de ida</div>
                <div>Fecha de regreso</div>
                <div>Precio</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </section>
            <section className="boletos-lista">
                <input>{doc.id}</input>
                <input>{doc.compania}</input>
                <input>{doc.destino}</input>                
                <input>{doc.origen}</input>
                <input>{doc.estanciad}</input>
                <input>{doc.fecida}</input>
                <input>{doc.fecvuelta}</input>
                <input>{doc.precio}</input>
                <div className="buyer">
                  <button className="buyer-button" onClick={() => addCart(doc.id)}>
                    Añadir boleto
                  </button>
                </div>
            </section>
          </div>
        </div>
    );
}