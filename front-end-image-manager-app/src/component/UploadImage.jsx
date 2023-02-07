import React from 'react'

function UploadImage() {
  return (
    <div>
      <fieldset>
        <label htmlFor="file">
          <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload an image"
            required
          />
        </label>
      </fieldset>
    </div>
  )
}

export default UploadImage