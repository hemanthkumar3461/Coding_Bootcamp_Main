
public class SecondCode {

	public static void main(String args[]) {
		//System.out.print("Hello java");
		int a=500000000;//int-4 bytes-32 bits(not more 8 zero's)
		short s=5;//short-2 bytes-16 bits(-32768 to 32767)
		byte q=5;//byte-1 byte-8 bits(-128 to 127)
		a=8;
		System.out.println(a);
		//To use a number which is having greater than 10 numbers
		long l=1000000000000000000l;//8 bytes
		double b=5.5;
		float c=5.5f;
		char d='a';
		d=66;
		double d1=5; //implicit conversion
		int k=(int)6.5;//explicit conversion or typecasting
		System.out.println(a);
		System.out.println(s);
		System.out.println(q);
		System.out.println(l);
		System.out.println(b);
		System.out.println(c);
		System.out.println(d);
		System.out.println(k);
	}
}
