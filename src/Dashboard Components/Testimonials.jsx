import React from 'react'

const Testimonials = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
  <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
    <img
      src="https://tailus.io/sources/blocks/twocards/preview/images/woman.jpg"
      alt="art cover"
      loading="lazy"
      width={1000}
      height={667}
      className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
    />
    <div className="sm:w-7/12 pl-0 p-5">
      <div className="space-y-2">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-cyan-900">
            Provident de illo eveniet commodi fuga fugiat laboriosam expedita.
          </h4>
          <p className="text-gray-600">
            Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam
            totam, doloribus eum impedit atque! Temporibus...
          </p>
        </div>
        <a href="https://tailus.io" className="block w-max text-cyan-600">
          Read more
        </a>
      </div>
    </div>
  </div>
  <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
    <img
      src="https://tailus.io/sources/blocks/twocards/preview/images/man.jpg"
      alt="art cover"
      loading="lazy"
      width={1000}
      height={667}
      className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
    />
    <div className="sm:w-7/12 pl-0 p-5">
      <div className="space-y-2">
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-cyan-900">
            Provident de illo eveniet commodi fuga fugiat laboriosam expedita.
          </h4>
          <p className="text-gray-600">
            Laborum saepe laudantium in, voluptates ex placeat quo harum aliquam
            totam, doloribus eum impedit atque! Temporibus...
          </p>
        </div>
        <a href="https://tailus.io" className="block w-max text-cyan-600">
          Read more
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Testimonials