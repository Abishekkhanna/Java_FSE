public class Ex_30_PatternMatchingSwitch {
    public static void checkObjectType(Object obj) {
        String result;
        if (obj == null) {
            result = "Null object";
        } else if (obj instanceof Integer) {
            result = "Integer: " + obj;
        } else if (obj instanceof String) {
            result = "String: " + obj;
        } else if (obj instanceof Double) {
            result = "Double: " + obj;
        } else {
            result = "Unknown type";
        }
        System.out.println(result);
    }

    public static void main(String[] args) {
        checkObjectType(123);
        checkObjectType("Hello");
        checkObjectType(45.67);
        checkObjectType(true);
        checkObjectType(null);
    }
}
