'use client'
import ProjectTile from "./ProjectTile"

export default function ProjectGrid() {
    return (
        <div>
            <div className="text-5xl font-bold text-[#cd6688] border-b-3 my-10 p-2">
                My Projects
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-0">
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
                <ProjectTile />
            </div>
        </div>
    )
}