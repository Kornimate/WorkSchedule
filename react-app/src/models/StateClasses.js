import { wpConfig } from "../config/wpConfig";

class StateBase {
    constructor(textRepresentation, color, shortDescription, description, extraData){
        this.textRepresentation = textRepresentation;
        this.color = color;
        this.shortDescription = shortDescription;
        this.description = description;
        this.extraData = extraData;
    }
}

class NormalState extends StateBase {
    constructor(){
        super("", wpConfig.primaryColor, "Working", "Normal working, should be able to reach me within the hour.", "🕐")
    }
}

class ConditionalWorkingState extends StateBase {
    constructor(){
        super("❓", wpConfig.conditionalColor, "Conditionally Working", "Conditional working, these hour(s) may be moved later, if not moved until the given day, that will be the working schedule.", "")
    }
}

class OfflineWorkingState extends StateBase {
    constructor(){
        super("🛜🚫", wpConfig.offlineColor, "Offline Working", "Offline working, you may not be able to reach me duing this time, but I am working.", "")
    }
}

export { NormalState, ConditionalWorkingState, OfflineWorkingState };