import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';
import { usePlantsSorted } from './field.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog/Catalog.js';

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

const plants = usePlantsSorted();
const harvest = harvestPlants(plants);

Catalog(harvest);