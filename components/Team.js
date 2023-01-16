import { useState } from "react"
import leadershipData from "../public/data/leadership-data.json"
import TeamMemberCard from "./TeamMemberCard"

export default function Team () {

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium uppercase mb-4 text-gray-900">Leadership</h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {leadershipData &&
            leadershipData.map(teamMember => (
              <TeamMemberCard
                key={teamMember.id}
                name={teamMember.name}
                role={teamMember.role}
                image={teamMember.image}
                website={teamMember.website}
                social={teamMember.social}
                text={teamMember.text}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}