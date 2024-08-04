import { StyleSheet } from "react-native"

export const sharedStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 4,
    backgroundColor: "#f9fafb",
    paddingHorizontal: 12,
    paddingVertical: 14,
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "black",
  },
  pickerPlaceholder: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "#6b7280",
  },
  pickerIconContainer: {
    top: 16,
    right: 14,
  },
})
