import React, { useEffect } from "react";
import "./services.css"
const services = () => {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              } else {
                entry.target.classList.remove("show");
              }
            });
          },
          {
            threshold: 0.2,
          }
        );

        cards.forEach((card) => {
          observer.observe(card);
        });

  const angle = 20;

  const lerp = (start, end, amount) => {
    return (1 - amount) * start + amount * end;
  };

  const remap = (value, oldMax, newMax) => {
    const newValue =
      ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;

    return Math.min(Math.max(newValue, -newMax), newMax);
  };


  cards.forEach((e) => {
    e.addEventListener("mousemove", (event) => {
      const rect = e.getBoundingClientRect();

      const centerX = (rect.left + rect.right) / 2;
      const centerY = (rect.top + rect.bottom) / 2;

      const posX = event.clientX - centerX;
      const posY = event.clientY - centerY;

      const x = remap(posX, rect.width / 2, angle);
      const y = remap(posY, rect.height / 2, angle);

      e.dataset.rotateX = x;
      e.dataset.rotateY = -y;
    });

    e.addEventListener("mouseleave", () => {
      e.dataset.rotateX = 0;
      e.dataset.rotateY = 0;
    });
  });

  const update = () => {
    cards.forEach((e) => {
      let currentX = parseFloat(
        e.style.getPropertyValue("--rotateY")
      ) || 0;

      let currentY = parseFloat(
        e.style.getPropertyValue("--rotateX")
      ) || 0;

      const x = lerp(
        currentX,
        Number(e.dataset.rotateX || 0),
        0.05
      );

      const y = lerp(
        currentY,
        Number(e.dataset.rotateY || 0),
        0.05
      );

      e.style.setProperty("--rotateY", `${x}deg`);
      e.style.setProperty("--rotateX", `${y}deg`);
    });
  };
    const interval = setInterval(update, 1000 / 60);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
},[]);

  return (
    <>
    <div className="services-heading">
    <h1>Our Services</h1>
    <p>
        Empowering businesses with innovative technology
        solutions for the digital future.
    </p>
    </div>
<div className="centered">
  <div className="card">
        <div
          className="shadow"
          style={{ "--url": "url('https://i.ibb.co/PM4ghD4/full.png')" }}
        ></div>

        <div
          className="image background"
          style={{ "--url": "url('https://i.ibb.co/JpJVJxq/Background.png')" }}
        ></div>

        <div
          className="image cutout"
          style={{ "--url": "url('https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ViJTIwZGV2fGVufDB8fDB8fHww')" }}
        ></div>

        <div className="content">
            <h2>Web Development</h2>
            <p>
              Modern, responsive, and scalable web applications
              tailored to your business needs.
            </p>
        </div>
    </div>
  <div className="card">
        <div
          className="shadow"
          style={{ "--url": "url('https://i.ibb.co/DC0MbxS/m-full.png')" }}
        ></div>

        <div
          className="image background"
          style={{ "--url": "url('https://i.ibb.co/ZdGBm4K/m-background.png')" }}
        ></div>

        <div
          className="image cutout"
          style={{ "--url": "url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFpfGVufDB8fDB8fHww')" }}
        ></div>

        <div className="content">
            <h2>AI Solutions</h2>
            <p>
              Intelligent automation, machine learning models,
              and AI-powered tools to drive innovation.
            </p>
        </div>
    </div>
  <div className="card">
        <div
          className="shadow"
          style={{ "--url": "url('https://i.ibb.co/gSBp82C/b-full.png')" }}
        ></div>

        <div
          className="image background"
          style={{ "--url": "url('https://i.ibb.co/MDBcyMW/b-background.png')" }}
        ></div>

        <div
          className="image cutout"
          style={{ "--url": "url('https://images.unsplash.com/photo-1690627931320-16ac56eb2588?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWQlMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D)" }}
        ></div>
    
        <div className="content">
            <h2>Cloud Services</h2>
            <p>
              Secure cloud infrastructure, deployment,
              maintenance, and performance optimization.
            </p>
        </div>
    </div>
</div>
    </>
  )
}

export default services
