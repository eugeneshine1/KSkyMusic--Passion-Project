import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/location">
        <Translate contentKey="global.menu.entities.location" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/artist">
        <Translate contentKey="global.menu.entities.artist" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/album">
        <Translate contentKey="global.menu.entities.album" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/song">
        <Translate contentKey="global.menu.entities.song" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
