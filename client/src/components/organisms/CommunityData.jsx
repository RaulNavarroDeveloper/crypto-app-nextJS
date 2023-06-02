import React from "react"

export default function CommunityData ({eventsData}) {
  const staticImage = "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=300/https://s3.cointelegraph.com/uploads/2023-05/739d70fe-8b55-430d-9cea-dd1a2c850113.jpg"
  return (
    <section className="col-span-3 row-span-2 h-full bg-red-700">
      <h2 className="text-3xl font-bold my-2 ms-5">Last Events</h2>
      { eventsData.map((event)=> (
        <div className="w-4/5 bg-red-300 mb-3 mt-2 m-auto">
          <a href={event.link} target="_blank">
          <img src={event.proof_image_link ? event.proof_image_link : staticImage}></img>
          <h3>{event.name}</h3>
          </a>
        </div>
      ))
      }
      {eventsData.length == 0 && (
        <p>No hay noticias de esta moneda</p>
      )}
    </section>
  )
};
