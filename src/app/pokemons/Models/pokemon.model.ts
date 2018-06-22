

export class Pokemon {
  url: string;
  name: string;
}

export class Form
{
  url: string;
  name: string;
}

export class Ability2
{
  url: string;
  name: string;
}

export class Ability
{
    slot: number;
    is_hidden: boolean;
    ability: Ability2;
}

export class Stat2
{
  url: string;
  name: string;
}

export class Stat
{
     stat: Stat2;
     effort: number;
     base_stat: number;
}

export class MoveLearnMethod
{
  url: string;
  name: string;
}

export class VersionGroup
{
  url: string;
  name: string;
}

export class VersionGroupDetail
{
      move_learn_method:MoveLearnMethod;
      level_learned_at : number;
      version_group:VersionGroup;
}

export class Move2
{
  url: string;
  name: string;
}

export class Move
{
     version_group_details: VersionGroupDetail[];
      move: Move2;
}

export class Sprites
{
    back_female: object;
     back_shiny_female: object;
     back_default: object;
     front_female: object;
     front_shiny_female: object;
    back_shiny: string;
     front_default: string;
     front_shiny: string;
}

export class Species
{
  url: string;
  name: string;
}

export class Version
{
  url: string;
  name: string;
}

export class GameIndice
{
      version: Version;
      game_index: number;
}

export class Type2
{
  url: string;
  name: string;
}

export class Type
{
      slot : number;
     type: Type2;
}

export class RootObject
{
     forms: Form[];
     abilities: Ability[];
     stats: Stat[];
     name: string;
     weight: number;
     moves: Move[];
     sprites: Sprites;
     held_items: object[];
     location_area_encounters:string;
     height: number;
     is_default: boolean;
     species: Species;
     id: number;
     order: number;
     game_indices: GameIndice;
     base_experience: number;
     types: Type[];
}
