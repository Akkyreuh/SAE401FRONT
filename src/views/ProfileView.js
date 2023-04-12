import React from "react";
import "../views/ProfilePage.css";

const ProfileView = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-header">
        <div className="profile-image-container">
          <img
            src="https://example.com/profile-picture.jpg"
            alt="Profile"
            className="profile-image"
          />
        </div>
        <div className="profile-info-container">
          <h1 className="profile-username">Pseudo de l'utilisateur</h1>
          <p className="profile-creation-date">Date de création : 01/01/2022</p>
        </div>
      </div>
      <div className="profile-body">
        <div className="profile-section">
          <h2 className="profile-section-title">
            Historique de paris sportifs
          </h2>
          <p className="profile-section-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            eleifend sapien in ante venenatis, nec auctor arcu blandit. Fusce at
            gravida nibh. Fusce feugiat nisl enim, in efficitur nulla tincidunt
            eu. Sed hendrerit quam vel augue pulvinar faucibus. Ut convallis
            ante a mi ultrices lacinia. Donec et ipsum odio. Nullam pellentesque
            sollicitudin orci, a hendrerit velit posuere vel. Pellentesque ut
            consequat lorem. Nunc at aliquam eros. Vestibulum ante ipsum primis
            in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent
            auctor urna id faucibus vehicula. Nulla dapibus arcu nec enim
            tincidunt, quis bibendum nibh laoreet. Vestibulum vel odio felis.
            Suspendisse potenti.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
