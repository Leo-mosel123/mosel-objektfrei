
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(id && id!=="#"){
      const el=document.querySelector(id);
      if(el){e.preventDefault(); el.scrollIntoView({behavior:"smooth",block:"start"});}
    }
  });
});

const form=document.getElementById("contactForm");
form?.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(form);
  const subject=encodeURIComponent("Unverbindliche Anfrage – Mosel Objektfrei");
  const body=encodeURIComponent(
    `Name: ${data.get("name")}\nTelefon: ${data.get("phone")}\nE-Mail: ${data.get("email")}\nWas soll geräumt werden: ${data.get("type")}\n\nNachricht:\n${data.get("message")}`
  );
  window.location.href=`mailto:info@mosel-objektfrei.de?subject=${subject}&body=${body}`;
});
