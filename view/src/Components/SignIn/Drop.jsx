import React from "react";

export default function Drop() {
  return (
    <>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <span class="dropdown-item active">Action</span>
          </li>
          <li>
            <span class="dropdown-item">Another action</span>
          </li>
          <li>
            <span class="dropdown-item">Something else here</span>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <span class="dropdown-item">Separated link</span>
          </li>
        </ul>
      </div>
    </>
  );
}
