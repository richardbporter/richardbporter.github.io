import React from "react"
import "./styles/global.css"
import rbp from "../img/rbp.jpg"

export default () => (
    <div class="font-sans max-w-lg bg-gray-100 mt-20 mx-auto my-auto shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-6 py-4">
            <img class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src={rbp} alt="richardbporter" />
            <div class="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p class="text-xl leading-normal">richardbporter</p>
            <p class="text-sm leading-normal text-gray-600">Drupal Developer</p>
            <p>Hi! I'm Richard B. Porter. For the past 10 years, I've been at The University of Iowa doing all things Drupal with a little DevOps mixed in as well. Get a hold of me on various social platforms. Cheers!</p>

            <div class="mt-4 flex">
                <a class="flex-auto text-pink-500 hover:text-pink-700" href="https://github.com/richardbporter">GitHub</a>
                <a class="flex-auto text-pink-500 hover:text-pink-700" href="https://drupal.org/u/rbp">Drupal</a>
                <a class="flex-auto text-pink-500 hover:text-pink-700" href="https://twitter.com/richardbporter">Twitter</a>
            </div>
            </div>
        </div>
    </div>
)