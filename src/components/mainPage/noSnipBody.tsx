"use client"
import React from 'react'
import { useProvider } from '@/context/UserContext'

const NoSnipBody = () => {
    const {setCreateSnippet, createSnippet}= useProvider();
  return (
    <div
          className={`${
            createSnippet ? `w-[50%]` : `w-full`
          } flex flex-col justify-center items-center`}
        >
          <img src="/images/no-items-found.webp" alt="Not Found" />
          <button
            className="  bg-theme rounded-md p-2 mt-2 "
            onClick={() => setCreateSnippet(true)}
          >
            <i className="bi bi-plus text-white">
              <span className="font-normal text-sm not-italic ml-1 ">
                Add new Snippet
              </span>
            </i>
          </button>
        </div>
  )
}

export default NoSnipBody
