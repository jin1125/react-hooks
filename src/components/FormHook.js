import React, { useState } from "react";

function FormHook() {
  const [name, setName] = useState({ firstNane: "", lastName: "" });

  return (
    <div>
      <div>
        <p>First Name: - {name.firstNane}</p>
        <p>Last Name: - {name.lastNane}</p>
      </div>
      <form>
        <input
          type="text"
          value={name.firstNane}
          onChange={(e) => setName({ ...name,firstNane: e.target.value })}
        />

        <input
          type="text"
          value={name.lasttNane}
          onChange={(e) => setName({ ...name,lastNane: e.target.value })}
        />
        <div>
          <p>{JSON.stringify(name)}</p>
        </div>
      </form>
    </div>
  );
}

export default FormHook;
