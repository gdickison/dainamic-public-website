/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import TeamMemberBio from "./TeamMemberBio"

export default function TeamMemberCard ({id, name, role, image, website, social, text}) {
  const [showBio, setShowBio] = useState(false)

  function handleClick () {
    setShowBio(!showBio)
  }

  return (
    <div className="p-4 lg:w-1/4 md:w-1/2">
      <div className="h-full flex flex-col items-center text-center">
        <div className="relative group" onClick={handleClick}>
          <img
            alt={name}
            className="flex-shrink-0 rounded-lg w-96 h-96 object-cover object-top mb-4 hover:cursor-pointer"
            src={`images/${image}`}
            onClick={() => handleClick()}
          />
          <span className="bg-gray-300 rounded-md mx-24 py-2 invisible group-hover:visible absolute top-10 left-0 right-0 text-black">See Full Bio</span>
        </div>
        <div className="w-full">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {website
              ? <a href={website} target="_blank" rel="noreferrer" >{name} </a>
              : `${name}`
            }
          </h2>
          <h3 className="text-gray-500 mb-3">{role}</h3>
          <span className="inline-flex">
            <a className="text-gray-500" href={social[0].link}>
              <img className="h-6 w-6" src="/images/linkedin.png" alt="linked in icon" />
            </a>
          </span>
        </div>
      </div>
      {showBio &&
        <TeamMemberBio
          name={name}
          role={role}
          image={image}
          text={text}
          handleClick={handleClick}
        />
      }
    </div>
  )
}